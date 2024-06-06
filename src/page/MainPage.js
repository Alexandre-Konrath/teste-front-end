import React, { useState } from 'react';

import { InputBusca } from '../component/InputBusca';
import { Card } from '../component/Card';
import { Header } from '../component/Header';

function MainPage() {
  const [valorBusca, setValorBusca] = useState("")

  return (
    <>
      <Header />
      <InputBusca valorBusca={valorBusca} setValorBusca={setValorBusca} />
      <Card valorBusca={valorBusca} />
    </>
  );
}

export default MainPage;
