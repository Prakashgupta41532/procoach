import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import ButtonInterceptor from './ButtonInterceptor';

export const NetworkLoggerContext = createContext({});

export function NetworkLoggerConsumer({ children }) {
  return (
    <NetworkLoggerContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error(
            'NetworkLoggerConsumer must be used within a NetworkLoggerProvider',
          );
        }
        return children(context);
      }}
    </NetworkLoggerContext.Consumer>
  );
}

export function NetworkLoggerProvider({ children }) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    // debugLog(TAG, `logger status -> ${isOpen}`);
  }, [isOpen]);

  const toggleInterceptor = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  const mProps = useMemo(
    () => ({
      toggleInterceptor,
      isOpen,
    }),
    [toggleInterceptor, isOpen],
  );
  return (
    <NetworkLoggerContext.Provider value={mProps}>
      {children}
      <ButtonInterceptor show />
    </NetworkLoggerContext.Provider>
  );
}
