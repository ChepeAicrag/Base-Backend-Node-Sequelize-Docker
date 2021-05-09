import {Router} from 'express';

import {
user,
sede
} from '../controllers';


const router = Router();


/**Registration Users routes*/
router
  .route('/user')
  .get(user.user)
  .post(user.addUser);

router
  .route('/user/:id')
  .put(user.updateUser)
  .delete(user.deleteUsers)
  .get(user.getUserById);


/**  Registration sedes routes*/

router
  .route('/sede')
  .get(sede.sede)
  .post(sede.addSede);

router
  .route('/user/:id')
  .put(sede.updateSede)
  .delete(sede.deleteSede)
  .get(sede.getSedeById);