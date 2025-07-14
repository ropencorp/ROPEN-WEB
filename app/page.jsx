import { MagneticButton } from '@/components/MagneticButton';
import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | Ropencorp', // He actualizado el título también
  description:
    'Ayudamos a las marcas a prosperar en el mundo digital. Entregamos diseños digitales a medida y construimos sitios web interactivos desde cero.',
};

export default function Home() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Thumbnail />
        <Project />

        {/* --- SECCIÓN DEL BOTÓN AÑADIDA --- */}
        <div className='flex items-center justify-center py-20 md:py-40'>
          <MagneticButton>Hablemos de tu Proyecto</MagneticButton>
        </div>
        {/* --- FIN DE LA SECCIÓN DEL BOTÓN --- */}
      </main>
      <Contact />
    </Transition>
  );
}
