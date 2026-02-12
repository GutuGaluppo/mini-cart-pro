import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../app/rootReducer";

/**
 * Hook tipado para selectors.
 *
 * Garante tipagem automática do estado.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
