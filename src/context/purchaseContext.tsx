import { createContext, ReactNode, useState } from "react";
type PaymentMethod =
  | "CARTÃO DE CRÉDITO"
  | "CARTÃO DE DÉBITO"
  | "DINHEIRO"
  | undefined;
export interface IPurchaseContext {
  zipCode: string;
  street: string;
  streetNumber: number | undefined;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: PaymentMethod;
  handleZipCode: (zipCode: string) => void;
  handleCity: (city: string) => void;
  handleState: (state: string) => void;
  handlePaymentMethod: (paymentMethod: PaymentMethod) => void;
  handleStreetNumber: (streetNumber: number) => void;
  handleStreet: (street: string) => void;
  handleComplement: (complement: string) => void;
  handleNeighborhood: (neighborhood: string) => void;
}
interface IPurchaseContextProvider {
  children: ReactNode;
}
export const PurchaseContext = createContext({} as IPurchaseContext);

export function PurchaseContextProvider({
  children,
}: IPurchaseContextProvider) {
  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState<number>();
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<
    "CARTÃO DE CRÉDITO" | "CARTÃO DE DÉBITO" | "DINHEIRO" | undefined
  >(undefined);
  function handleZipCode(zipCode: string) {
    setZipCode(zipCode);
  }
  function handleCity(city: string) {
    setCity(city);
  }
  function handleState(state: string) {
    setState(state);
  }
  function handlePaymentMethod(paymentMethod: PaymentMethod) {
    setPaymentMethod(paymentMethod);
  }
  function handleStreetNumber(streetNumber: number) {
    setStreetNumber(streetNumber);
  }
  function handleStreet(street: string) {
    setStreet(street);
  }
  function handleComplement(complement: string) {
    setComplement(complement);
  }
  function handleNeighborhood(neighborhood: string) {
    setNeighborhood(neighborhood);
  }

  return (
    <PurchaseContext.Provider
      value={{
        street,
        zipCode,
        complement,
        city,
        neighborhood,
        paymentMethod,
        state,
        streetNumber,
        handleNeighborhood,
        handleCity,
        handleComplement,
        handlePaymentMethod,
        handleState,
        handleStreetNumber,
        handleZipCode,
        handleStreet,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
}
