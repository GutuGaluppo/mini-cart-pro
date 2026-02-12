import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";

/**
 * Hook tipado para dispatch.
 *
 * Evita uso de any ao despachar thunks.
 */
export const useAppDispatch: () => AppDispatch = useDispatch;
