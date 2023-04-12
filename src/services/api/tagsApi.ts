import axios, {AxiosResponse} from "axios";

// Interface que define la estructura de una nota
// Puedes reutilizarla para definir la estructura de un tag
interface Tag {
  id: number;
  name: string;
}

// URL base de la API para el endpoint de tags
const API_BASE_URL = "https://web-production-6f63.up.railway.app/tags";

// Función que maneja errores de Axios
function handleAxiosError(error: any) {
  console.error(error);
  throw error;
}

// Función que realiza una petición GET para obtener todos los tags
export async function getTags(): Promise<Tag[] | undefined> {
  try {
    const response: AxiosResponse<Tag[]> = await axios.get(`${API_BASE_URL}`);

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

// Función que realiza una petición GET para obtener un tag por ID
export async function getTagById(id: number): Promise<Tag | undefined> {
  try {
    const response: AxiosResponse<Tag> = await axios.get(`${API_BASE_URL}/${id}`);

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

// Función que realiza una petición POST para crear un nuevo tag
export async function createTag(name: string): Promise<Tag | undefined> {
  try {
    const response: AxiosResponse<Tag> = await axios.post(`${API_BASE_URL}`, {
      name,
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

// Función que realiza una petición PUT para actualizar un tag existente
export async function updateTag(id: number, name: string): Promise<Tag | undefined> {
  try {
    const response: AxiosResponse<Tag> = await axios.put(`${API_BASE_URL}/${id}`, {
      name,
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

// Función que realiza una petición DELETE para eliminar un tag existente
export async function deleteTag(id: number): Promise<void> {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    handleAxiosError(error);
  }
}
