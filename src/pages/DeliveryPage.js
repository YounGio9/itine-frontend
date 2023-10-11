import { Helmet } from 'react-helmet-async';
import { divide, filter } from 'lodash';
import { sentenceCase } from 'change-case';
import React, { useState } from 'react';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  Modal,
  Box,
} from '@mui/material';
// components
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { DeliveryListeHead, DeliveryListToolbar } from '../sections/@dashboard/delivery';
// mock
import USERLIST from '../_mock/delivery1';
import { getDeliveryMen } from '../services/deliveryMan.service';
import Loading from '../components/UI/Loading';
import DeliveryManInfosModal from '../components/deliveryManInfosModal';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Nom', alignRight: false },
  { id: 'boutique', label: 'Boutique', alignRight: false },
  { id: 'role', label: 'Ville', alignRight: false },
  { id: 'status', label: 'Statut', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array?.map((el, index) => [el, index]);

  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_user) => (_user.firstName + _user.lastName).toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis?.map((el) => el[0]);
}

export default function DeliveryPage() {
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [activeUser, setActiveUser] = useState({});

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const [loading, setLoading] = React.useState(true);
  const [deliveryMen, setDeliveryMen] = React.useState([]);

  const [activeView, setActiveView] = React.useState('requests');
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const getDelMen = async () => {
      const data = await getDeliveryMen();
      setLoading(false);
      console.log('data from service', data);
      setDeliveryMen(
        activeView === 'requests'
          ? data.data.filter((elem) => elem.status === 'unset')
          : data.data.filter((elem) => elem.status !== 'unset')
      );
    };
    getDelMen();
  }, [activeView, isOpen]);

  React.useMemo(() => {
    console.log('deliveryMen', activeUser);
  }, [activeUser]);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - deliveryMen.length) : 0;

  const filteredUsers = applySortFilter(deliveryMen, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Helmet>
        <title>Livreur | Itine </title>
      </Helmet>

      <Container className="relative ">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Livreurs {activeView === 'requests' && '(Requêtes)'}
          </Typography>
          <Button
            className="bg-blue-700"
            variant="contained"
            onClick={() => {
              if (activeView === 'requests') setActiveView('actives');
              else setActiveView('requests');
            }}
          >
            {activeView === 'actives' ? 'Voir les requêtes' : 'Voir les livreurs'}
          </Button>
        </Stack>

        <Card>
          <DeliveryListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <DeliveryListeHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={deliveryMen?.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                {loading ? (
                  <Loading />
                ) : (
                  <TableBody>
                    {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                      const { id, lastName, firstName, town, status } = row;
                      const selectedUser = selected.indexOf(firstName) !== -1;

                      return (
                        <TableRow
                          onClick={() => {
                            if (activeView === 'requests') {
                              console.log(`clicked on ${id}`);
                              setActiveUser(deliveryMen.find((deliveryMan) => deliveryMan.id === id));
                              setIsOpen(true);
                            }
                          }}
                          hover
                          key={id}
                          tabIndex={-1}
                          role="checkbox"
                          selected={selectedUser}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, firstName)} />
                          </TableCell>

                          <TableCell component="th" scope="row" padding="none">
                            <Stack direction="row" alignItems="center" spacing={2}>
                              {/* <Avatar alt={firstName} src={} /> */}
                              <Typography variant="subtitle2" noWrap>
                                {`${firstName} ${lastName}`}
                              </Typography>
                            </Stack>
                          </TableCell>

                          <TableCell align="left">{town}</TableCell>

                          <TableCell align="left">{town}</TableCell>

                          <TableCell align="left">
                            <Label color={(status === 'accepted' && 'success') || 'error'}>
                              {status === 'accepted' ? 'actif' : status === 'rejected' ? 'rejeté' : 'En attente'}
                            </Label>
                          </TableCell>

                          <TableCell align="right">
                            <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                              <Iconify icon={'eva:more-vertical-fill'} />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                )}

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Non trouvé
                          </Typography>

                          <Typography variant="body2">
                            Aucun résultat trouvé pour &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Essayez de vérifier les fautes de frappe ou d'utiliser des mots complets.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
      <DeliveryManInfosModal isOpen={isOpen} deliveryMan={activeUser} toggleModal={toggleModal} />

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem onClick={toggleModal}>
          <Iconify icon={'gridicons:info'} sx={{ mr: 2 }} />
          Info
        </MenuItem>
        <MenuItem>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Modifier
        </MenuItem>

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Supprimer
        </MenuItem>
      </Popover>
    </>
  );
}