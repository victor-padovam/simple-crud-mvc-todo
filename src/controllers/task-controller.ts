import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { title, completed, userId } = req.body;
  const task = await prisma.task.create({
    data: {
      title,
      completed,
      userId,
    },
  });
  res.json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const task = await prisma.task.update({
    where: { id: Number(id) },
    data: { title, completed },
  });
  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.task.delete({
    where: { id: Number(id) },
  });
  res.json({ message: 'Task deleted' });
};
