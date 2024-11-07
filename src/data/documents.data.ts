import { DocumentInterface } from "../Interfaces/Document.interface";
import SIGECENDIS_DOC from "../assets/images/sigecendis.jpg";
import JATIC_TALLER_DOC from "../assets/images/tallerJatic.png";
import HOMOLOGACION_DOC from "../assets/images/homologacion.jpeg";
import PYTHON_ESSENTIALS_DOC from "../assets/images/pythonEssentials.png"

export const DocumentsData: DocumentInterface[] = [
  {
    title: "Desarrollo de SIGECENDIS",
    period: "Marzo 2024 - Octubre 2024",
    sourceImage: SIGECENDIS_DOC,
    description: "Participación en el desarrollo del Sistema de Gestión de Centros de Desarrollo Infantil."
  },
  {
    title: "Presentación del taller sobre Git y GitHub",
    period: "16 Octubre 2024 - 18 Octubre 2024",
    sourceImage: JATIC_TALLER_DOC,
    description: "Participación en la 14va Jornada Academica de Tecnologías de la Información y Comunicación (JATIC) impartiendo un taller sobre Git y como integrarlo con GitHub."
  },
  {
    title: "Homologación del sitio web de UTS",
    period: "Octubre 2023 - Diciembre 2023",
    sourceImage: HOMOLOGACION_DOC,
    description: "Participación en la homologación del sitio web de la Unversidad Tecnológica del Sur de Sonora."
  },
  {
    title: "Maratón de Python",
    period: "Abril 2023 - Mayo 2023",
    sourceImage: PYTHON_ESSENTIALS_DOC,
    description: "Participación en el maratón de Python. Consistio en un curso básico sobre Python."
  }
];