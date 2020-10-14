import Orphanage from "../models/Orphanage";
import images_view from "./images_view";

/* Determina o que é retornado para a respost */
export default {
    render(orphanage: Orphanage) {
        return {
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,

            /* Transforma os paths da imagem em urls de acesso */
            images: images_view.renderMany(orphanage.images)
        }
    },
    renderMany(orphanages: Orphanage[]) {
        return orphanages.map(orphanage => this.render(orphanage))
    }
}