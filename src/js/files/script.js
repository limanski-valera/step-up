// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

function initCallOrder() {
    const toggleBtn = document.querySelector(".call-order-header__button");
    const window = document.querySelector(".call-order-header__window");

    document.addEventListener("click", (e) => {
        if (e.target.closest(".call-order-header__button")) {
            window.classList.toggle("_opened");
        } else if (
            !e.target.closest(".call-order-header") &&
            window.classList.contains("_opened")
        ) {
            window.classList.remove("_opened");
        }
    });
}
function windowLoad() {
    if (document.querySelector(".call-order-header")) {
        initCallOrder();
    }
}

document.addEventListener("DOMContentLoaded", windowLoad);
