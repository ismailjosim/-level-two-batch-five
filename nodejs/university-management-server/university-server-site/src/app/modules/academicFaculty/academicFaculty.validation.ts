import { z } from 'zod';

const createAcademicFacultySchemaValidation = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
});

export const academicFacultyValidation = {
  createAcademicFacultySchemaValidation,
};
