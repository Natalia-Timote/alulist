export function gerarDiaDaSemana() {
    return `${new Date().toLocaleDateString("pt-Br", { weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-Br", { hour: "numeric", minute: "numeric" })}`;
}