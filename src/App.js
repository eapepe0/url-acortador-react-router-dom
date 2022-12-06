import { Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  function Redirected({ link }) {
    window.location.replace(`https://mpago.la/${link}`);
    return null;
  }

  return (
    <Routes>
      <Route path="/" element={<h1> Prohibido el acceso ...</h1>} />
      <Route path="/qrkiloymedio" element={<Redirected link="2KWwx19" />} />
      <Route path="/qrkilo" element={<Redirected link="11nxDt6" />} />
      <Route
        path="/qrtrescuartomascuarto"
        element={<Redirected link="32Epoes" />}
      />
      <Route path="/qrmediokilo" element={<Redirected link="2FYjyN8" />} />
      <Route path="/qrdosdemedio" element={<Redirected link="2U2L87W" />} />
      <Route path="/qrcuatrocuartos" element={<Redirected link="1qZZWYZ" />} />
      <Route path="/qrmedioycuarto" element={<Redirected link="2kH2A8x" />} />
      <Route
        path="/qrmedioydoscuartos"
        element={<Redirected link="2DRVXnd" />}
      />
      <Route path="/qrkilomascuarto" element={<Redirected link="1T87bZe" />} />
      <Route
        path="/qralmedradogrande"
        element={<Redirected link="1syzzPi" />}
      />
      <Route path="/qrcincocuartos" element={<Redirected link="2rCueHt" />} />
      <Route path="/qrdoscuartos" element={<Redirected link="1azvxWQ" />} />
      <Route path="/qrtorta" element={<Redirected link="2ggWKoz" />} />
      <Route path="/qrtrescuartos" element={<Redirected link="2F83EhT" />} />
      <Route
        path="/qralmendradochico"
        element={<Redirected link="2seAYTh" />}
      />
      <Route path="/qrkiloyenvio" element={<Redirected link="2mb9nqE" />} />
      <Route path="/qrcuarto" element={<Redirected link="2LsCoZX" />} />
      <Route path="/qrtresdecuarto" element={<Redirected link="2Wj4yfB" />} />
      <Route path="/qrdosdekilo" element={<Redirected link="1efJ2sm" />} />
      <Route
        path="/qrkiloydoscuartos"
        element={<Redirected link="2URj7UA" />}
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}
