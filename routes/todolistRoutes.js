import express from 'express';
import todolistController from '../controller/todolistController.js';

export const router = express.Router();

// Ensure that controller methods are correctly referenced
router.post('/create', todolistController.createTodolist);
router.get('/', todolistController.getTodolist);
router.delete('/:id', todolistController.deleteTodolist); // Add this line for delete functionality