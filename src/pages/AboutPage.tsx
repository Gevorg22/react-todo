import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3>Страница информации</h3>
      <p>Информация отсутствует...</p>
      <button className="btn purple darken-2" onClick={() => navigate('/')}>
        Обратно к списку дел
      </button>
    </>
  );
};

export default AboutPage;
