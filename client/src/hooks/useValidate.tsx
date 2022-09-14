import { useCallback } from "react";
import { toast } from "react-toastify";
/**
 * Валидация полей формы
 * @returns
 */
export function useValidate() {
  /**
   * Проверка на пустоту
   * @param text - строка, которую проверяем
   * @param whatChecking - название поля проверки
   * @returns - всплывающий тост с ошибкой
   */
  const emptyField = useCallback((text: string, whatChecking: string) => {
    if (!text) {
      return toast.error(`${whatChecking} не может быть пустым`);
    }
  }, []);
  /**
   * Проверка на ноль
   * @param number - поле с типом number, которую проверяем
   * @param whatChecking - название поля проверки
   * @returns - всплывающий тост с ошибкой
   */
  const zeroField = useCallback((number: number, whatChecking: string) => {
    if (number === 0) {
      return toast.error(`${whatChecking} не может быть ноль`);
    }
  }, []);
  /**
   * Проверка по регулярному выражению на корректность Email
   * @param text - строка с email
   * @returns - всплывающий тост с ошибкой
   */
  const matchEmail = useCallback((text: string) => {
    if (!validateEmail(text)) {
      return toast.error("Введите корректный Email");
    }
  }, []);
  /**
   * Проверка на длину и символы
   * @param text - строка, которую проверяем
   * @param whatChecking - название поля проверки
   * @returns - всплывающий тост с ошибкой
   */
  const checkingLengthAndSymbols = useCallback(
    (text: string, whatChecking: string) => {
      if (!validateSymbols(text)) {
        return toast.error(
          `${whatChecking} должен быть минимум 6 символов и содержать символы в разных регистрах с цифрами`
        );
      }
    },
    []
  );
  /**
   * Регулярное выражение для проверки корректности email
   * @param email - строка с email
   * @returns - возвращает true или false
   */
  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  /**
   * Регулярное выражение для проверки пароля на символы, регистр и цифры
   * @param password - строка с паролем
   * @returns - возвращает true
   */
  const validateSymbols = (password: string) => {
    const regex = new RegExp(
      "(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{6,}"
    );

    if (regex.test(password)) return true;
  };

  return {
    checkingLengthAndSymbols,
    matchEmail,
    emptyField,
    zeroField,
  };
}
