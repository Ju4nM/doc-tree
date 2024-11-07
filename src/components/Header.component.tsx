export default function Header() {
  const profileImage: string = import.meta.env.VITE_PROFILE_IMAGE_URL;
  return (
    <div className = "pb-10 flex flex-col lg:flex-row items-center gap-10">
      <div className="shrink-0">
        <img className = "w-72 rounded-full" src = { profileImage } alt="Imagen traida del perfil de LinkedIn" />
      </div>
      <div className = "flex flex-col justify-between gap-8 md:gap-12">
        <h1 className = "text-4xl lg:text-5xl xl:text-7xl text-center lg:text-left">Juan Enrique Mart&iacute;nez Flores</h1>
        <h2 className = "text-lg text-center md:text-2xl lg:text-left">Los presentes documentos e insignia avalan mi participación en los diferentes eventos y proyectos en los que me involucre.</h2>
      </div>
    </div>
  )
}
