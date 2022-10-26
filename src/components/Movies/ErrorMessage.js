import React from 'react';
import { Alert } from 'antd';

function ErrorMessage() {
  return (
    <Alert
      message="Error"
      description="Ошибка на стороне сервера. Перезагрузите страницу и попробуйте еще раз."
      type="error"
      showIcon
    />
  );
}

export default ErrorMessage;
