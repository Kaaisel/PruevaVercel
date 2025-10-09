import { Auth } from "../auth/interface/auth";

export interface LoginRespuesta {
    success: boolean;
    user?: Auth; // Cambiado a un solo objeto Auth
    message?: string;

}
