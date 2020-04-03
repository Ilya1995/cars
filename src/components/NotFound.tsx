import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <div className="return">
        Страница не найдена. Вернуться на <Link to="/">главную</Link>?
      </div>
      <div>
        <p id="error">
          E<span>r</span>ror
        </p>
        <p id="code">
          4<span>0</span>
          <span>4</span>
        </p>
      </div>
    </div>
  );
};
