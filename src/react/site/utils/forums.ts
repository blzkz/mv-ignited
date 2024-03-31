export function getIconClassBySlug(slug: string) {
  switch (slug) {
    case "off-topic":
      return "fid-6";
    case "feda":
      return "fid-90";
    case "ofertas":
      return "fid-149";
    case "streamers":
      return "fid-165";
    case "criptomonedas":
      return "fid-156";
    case "compra-venta":
      return "fid-112";
    case "estudios-trabajo":
      return "fid-132";
    case "ciencia":
      return "fid-148";
    case "musica":
      return "fid-23";
    case "cine":
      return "fid-102";
    case "tv":
      return "fid-82";
    case "libros-comics":
      return "fid-109";
    case "anime-manga":
      return "fid-99";
    case "deportes":
      return "fid-32";
    case "motor":
      return "fid-96";
    case "cocina":
      return "fid-127";
    case "fitness":
      return "fid-116";
    case "mascotas":
      return "fid-126";
    case "viajes":
      return "fid-106";
    case "shopping":
      return "fid-113";
    case "juegos":
      return "fid-7";
    case "juegos-comunidad":
      return "fid-52";
    case "mmo":
      return "fid-26";
    case "juegos-lucha":
      return "fid-150";
    case "juegos-movil":
      return "fid-136";
    case "juegos-mesa-rol":
      return "fid-133";
    case "mafia":
      return "fid-164";
    case "club-hucha":
      return "fid-135";
    case "intercambios":
      return "fid-144";
    case "counterstrike":
      return "fid-1";
    case "diablo":
      return "fid-114";
    case "ffxiv":
      return "fid-147";
    case "lol":
      return "fid-110";
    case "lostark":
      return "fid-166";
    case "poe":
      return "fid-137";
    case "pokemon":
      return "fid-128";
    case "valorant":
      return "fid-162";
    case "wow":
      return "fid-38";
    case "dev":
      return "fid-9";
    case "gamedev":
      return "fid-143";
    case "electronica-telefonia":
      return "fid-83";
    case "hard-soft":
      return "fid-3";
    case "mediavida":
      return "fid-4";
    default:
      return "fid-desconocido";
  }
}
