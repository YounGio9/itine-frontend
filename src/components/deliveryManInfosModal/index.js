import React, { useEffect } from 'react';

import { Modal, Box, Typography, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { changeDeliveryManStatus } from '../../services/deliveryMan.service';
import Label from '../label';
import Loading from '../UI/Loading';

function DeliveryManInfosModal({ isOpen, deliveryMan, toggleModal }) {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const [password, setPassword] = React.useState('');
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
  };

  useEffect(() => {
    setTimeout(() => setMessage(''), 2000);
  }, [message]);
  const handleChangeStatus = async (status) => {
    setLoading(true);
    const result = await changeDeliveryManStatus({
      id: deliveryMan.id,
      active: status,
    });
    setLoading(false);
    if (result.success) {
      if (status) {
        setMessage('Vous avez accepté avec succès');
        setSuccess(true);
      } else {
        setMessage('Vous avez rejeté avec succès');
        setError(true);
      }
    }
  };

  return (
    <div style={{ margin: '25%' }}>
      <Modal
        open={isOpen}
        onClose={() => {
          setSuccess(false);
          setError(false);
          toggleModal();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {success || error ? (
            <>
              <div>{message}</div>
              {success && (
                <>
                  <div>Définissez un mot de passe pour le livreur</div>
                  <TextField
                    name="password"
                    required
                    label="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <LoadingButton
                    className="bg-blue-500 my-6"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={() => {
                      setSuccess(false);
                      setError(false);
                      toggleModal();
                    }}
                  >
                    Appliquer
                  </LoadingButton>
                </>
              )}
            </>
          ) : (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Informations du livreur {deliveryMan.firstName}
              </Typography>
              <div className="flex flex-col gap-5 pt-5">
                <p>
                  <strong>Nom et prenoms</strong>: {`${deliveryMan.firstName}  ${deliveryMan.lastName}`}
                </p>
                <p>
                  <strong>Pays</strong>: {deliveryMan.country}
                </p>

                <p>
                  <strong>Date de naissance</strong>: {new Date(deliveryMan.dateOfBirth).toLocaleDateString()}
                </p>

                <p>
                  <strong>Email</strong>: {deliveryMan.email}
                </p>

                <p>
                  <strong>Numero de telephone</strong>: {deliveryMan.phoneNumber}
                </p>

                <p>
                  <strong>Situation matrimoniale</strong>:{' '}
                  {deliveryMan.maritalStatus === 'single' ? 'Célibataire' : 'En couple'}
                </p>

                <p className="capitalize">
                  <strong>Ville</strong>: {deliveryMan.town}
                </p>

                {loading ? (
                  <Loading />
                ) : (
                  <div className=" flex justify-between">
                    <button onClick={() => handleChangeStatus(true)}>
                      <Label
                        sx={{
                          width: 100,
                          height: 40,
                        }}
                        color={'success'}
                      >
                        Accepter
                      </Label>
                    </button>
                    <button onClick={() => handleChangeStatus(false)}>
                      <Label
                        sx={{
                          width: 100,
                          height: 40,
                        }}
                        color={'error'}
                      >
                        Rejeter
                      </Label>
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default DeliveryManInfosModal;
