import axios, {AxiosResponse} from "axios";

import {Note} from "@/utilities";

// Interface que define la estructura de una nota

// URL base de la API
const API_BASE_URL = "https://web-production-6f63.up.railway.app";

// Función que maneja errores de Axios
function handleAxiosError(error: any) {
  console.error(error);
  throw error;
}

// Función que realiza una petición GET para obtener todas las notas
export async function getNotes(): Promise<Note[]> {
  try {
    const response: AxiosResponse<Note[]> = await axios.get(`${API_BASE_URL}/notes`);

    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
}

// Función que realiza una petición GET para obtener una nota por ID
export async function getNoteById(id: number): Promise<Note> {
  try {
    const response: AxiosResponse<Note> = await axios.get(`${API_BASE_URL}/notes/${id}`);

    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
}

// Función que realiza una petición POST para crear una nueva nota
export async function createNote(title: string, content: string, tags: string[]): Promise<Note> {
  try {
    const response: AxiosResponse<Note> = await axios.post(`${API_BASE_URL}/notes`, {
      title,
      content: content ?? "",
      tags: tags ?? [],
      reminder: "",
      archived: false,
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
}

// Función que realiza una petición PUT para actualizar una nota existente
export async function updateNote(id: number, title: string, content: string): Promise<Note> {
  try {
    const response: AxiosResponse<Note> = await axios.put(`${API_BASE_URL}/notes/${id}`, {
      title,
      content,
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
}

// Función que realiza una petición DELETE para eliminar una nota existente
export async function deleteNote(id: number): Promise<void> {
  try {
    await axios.delete(`${API_BASE_URL}/notes/${id}`);
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
}

export async function deleteTagFromNote(id: number, tagId: number): Promise<void> {
  try {
    await axios.delete(`${API_BASE_URL}/notes/${id}/tag/${tagId}`);
  } catch (error) {
    handleAxiosError(error);
  }
}
