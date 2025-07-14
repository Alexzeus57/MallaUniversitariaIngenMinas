const mensajesSemestre = {
  1: "¡Bien hecho Pulguita! Completaste el primer paso. ¡El comienzo de un gran camino!",
  2: "¡Excelente Potito! El segundo al bolsillo. ¡Sigue así!",
  3: "¡Vas con todo! Tercer semestre completado con éxito, siempre cuenta conmigo.",
  4: "¡Ya estás casi en la mitad! Cuarto semestre terminado y seguimos con el mismo apoyo.",
  5: "¡Impresionante! Has superado cinco semestres, eres sequisima, no te rindas.",
  6: "¡Wow! Ya llevas seis. ¡Una verdadera ingeniera hermosa por donde la miren!",
  7: "¡Felicidades! Siete semestres, ya cada vez queda menos.",
  8: "¡Solo faltan unos pocos pasos! Semestre ocho me mamas el xoxo, jeje.",
  9: "¡Un paso más cerca de la meta! Nueve semestres, como siempre te dije, eres muy capaz.",
  10: "¡Ya casi terminas! Semestre diez fuera del camino, no hay obstáculo que pueda contigo.",
  11: "¡INCREÍBLE! ¡Has completado toda la carrera! 🎓🎉"
};

const mensajeFinal = `Mi amada pulguita, siempre supe que serías capaz de terminar la carrera, me siento enormemente orgulloso de ti, de todo el esfuerzo, las lagrimas y el sudor que pusiste en cada uno de los momentos que viviste durante todos estos años. Sé lo mucho que sacrificaste para conseguirlo. Te amo muchísimo, disfrútalo, vívelo y jamás te des por vencida, tú eres increíble, devórate el mundo entero. Atte Tu Osito.`;

const semestres = [
  // Semestre 1
  [
    { nombre: "Cálculo I para Ingeniería", prerrequisitos: "" },
    { nombre: "Álgebra I para Ingeniería", prerrequisitos: "" },
    { nombre: "Física I para Ingeniería", prerrequisitos: "" },
    { nombre: "Introducción al Diseño en Ingeniería", prerrequisitos: "" },
    { nombre: "Química General para Ingeniería", prerrequisitos: "" }
  ],
  // Semestre 2
  [
    { nombre: "Cálculo II para Ingeniería", prerrequisitos: "Cálculo I para Ingeniería" },
    { nombre: "Álgebra II para Ingeniería", prerrequisitos: "Álgebra I para Ingeniería" },
    { nombre: "Física II para Ingeniería", prerrequisitos: "Física I para Ingeniería" },
    { nombre: "Fundamentos de Programación para Ingeniería", prerrequisitos: "Introducción al Diseño en Ingeniería" },
    { nombre: "Métodos Gráficos para Ingeniería en Minas", prerrequisitos: "Introducción al Diseño en Ingeniería" },
    { nombre: "Análisis Estadístico para Ingeniería en Minas", prerrequisitos: "Introducción al Diseño en Ingeniería" }
  ],
  // Semestre 3
  [
    { nombre: "Inglés I", prerrequisitos: "" },
    { nombre: "Cálculo III para Ingeniería", prerrequisitos: "Cálculo II para Ingeniería" },
    { nombre: "Fundamentos de Economía para Ingeniería", prerrequisitos: "Cálculo I para Ingeniería" },
    { nombre: "Termodinámica y Físico Química", prerrequisitos: "Química General para Ingeniería" },
    { nombre: "Electricidad y Electrotecnia", prerrequisitos: "Física II para Ingeniería" },
    { nombre: "Geología General y Estructural", prerrequisitos: "Métodos Gráficos para Ingeniería en Minas" }
  ],
  // Semestre 4
  [
    { nombre: "Inglés II", prerrequisitos: "Inglés I" },
    { nombre: "Taller de Diseño en Ingeniería", prerrequisitos: "Fundamentos de Economía para Ingeniería" },
    { nombre: "Ecuaciones Diferenciales y Métodos Numéricos para Ingeniería", prerrequisitos: "Cálculo II para Ingeniería, Álgebra II para Ingeniería" },
    { nombre: "Métodos de Explotación", prerrequisitos: "Geología General y Estructural" },
    { nombre: "Mineralogía y Petrografía", prerrequisitos: "Geología General y Estructural" },
    { nombre: "Mecánica de Fluidos", prerrequisitos: "Cálculo III para Ingeniería, Termodinámica y Físico Química" }
  ],
  // Semestre 5
  [
    { nombre: "Inglés III", prerrequisitos: "Inglés II" },
    { nombre: "Voladura de Rocas", prerrequisitos: "Métodos de Explotación" },
    { nombre: "Geomensura de Minas", prerrequisitos: "Métodos de Explotación" },
    { nombre: "Geología Económica y de Minas", prerrequisitos: "Mineralogía y Petrografía" },
    { nombre: "Resistencia de Materiales", prerrequisitos: "Física II para Ingeniería, Taller de Diseño en Ingeniería" },
    { nombre: "Ingeniería Económica y Evaluación de Proyectos", prerrequisitos: "Taller de Diseño en Ingeniería" }
  ],
  // Semestre 6
  [
    { nombre: "Inglés IV", prerrequisitos: "Inglés III" },
    { nombre: "Carguío y Transporte", prerrequisitos: "Voladura de Rocas" },
    { nombre: "Modelación y Simulación", prerrequisitos: "Fundamentos de Programación para Ingeniería, Ecuaciones Diferenciales y Métodos Numéricos para Ingeniería" },
    { nombre: "Procesos Mineralúrgicos", prerrequisitos: "Mineralogía y Petrografía, Voladura de Rocas" },
    { nombre: "Mecánica de Rocas I", prerrequisitos: "Geología Económica y de Minas, Resistencia de Materiales" },
    { nombre: "Administración de Empresas", prerrequisitos: "Ingeniería Económica y Evaluación de Proyectos" }
  ],
  // Semestre 7
  [
    { nombre: "Estimación de Recursos Mineros", prerrequisitos: "Geología Económica y de Minas, Modelación y Simulación" },
    { nombre: "Optimización", prerrequisitos: "Modelación y Simulación" },
    { nombre: "Servicios Generales Mina", prerrequisitos: "Electricidad y Electrotecnia, Mecánica de Fluidos" },
    { nombre: "Concentración de Minerales", prerrequisitos: "Procesos Mineralúrgicos" },
    { nombre: "Mecánica de Rocas II", prerrequisitos: "Voladura de Rocas, Mecánica de Rocas I" },
    { nombre: "Seguridad Minera y Salud Ocupacional", prerrequisitos: "Administración de Empresas" }
  ],
  // Semestre 8
  [
    { nombre: "Procesos Metalúrgicos", prerrequisitos: "Concentración de Minerales" },
    { nombre: "Economía Minera", prerrequisitos: "Estimación de Recursos Mineros" },
    { nombre: "Gestión en las Operaciones Unitarias", prerrequisitos: "Carguío y Transporte" },
    { nombre: "Tecnologías Avanzadas para Minería", prerrequisitos: "Electricidad y Electrotecnia, Optimización" },
    { nombre: "Liderazgo", prerrequisitos: "Administración de Empresas" },
    { nombre: "Ventilación de Minas", prerrequisitos: "Voladura de Rocas, Servicios Generales Mina" }
  ],
  // Semestre 9
  [
    { nombre: "Tópico de Especialidad I", prerrequisitos: "Inglés III, Voladura de Rocas, Geomensura de Minas, Geología Económica y de Minas, Resistencia de Materiales, Ingeniería Económica y Evaluación de Proyectos" },
    { nombre: "Administración y Gestión de Proyectos Mineros", prerrequisitos: "Administración de Empresas, Gestión en las Operaciones Unitarias" },
    { nombre: "Sustentabilidad Minera", prerrequisitos: "Procesos Metalúrgicos, Gestión en las Operaciones Unitarias" },
    { nombre: "Diseño y Planificación Mina Cielo Abierto", prerrequisitos: "Mecánica de Rocas II, Economía Minera" },
    { nombre: "Diseño y Planificación Mina Subterránea", prerrequisitos: "Mecánica de Rocas II, Ventilación de Minas" },
    { nombre: "Electivo I", prerrequisitos: "Inglés III, Voladura de Rocas, Geomensura de Minas, Geología Económica y de Minas, Resistencia de Materiales, Ingeniería Económica y Evaluación de Proyectos" }
  ],
  // Semestre 10
  [
    { nombre: "Tópico de Especialidad II", prerrequisitos: "Inglés III, Voladura de Rocas, Geomensura de Minas, Geología Económica y de Minas, Resistencia de Materiales, Ingeniería Económica y Evaluación de Proyectos" },
    { nombre: "Legislación Laboral y Minera", prerrequisitos: "Administración de Empresas" },
    { nombre: "Taller de Evaluación de Proyectos Metalúrgicos", prerrequisitos: "Procesos Metalúrgicos, Administración y Gestión de Proyectos Mineros" },
    { nombre: "Taller de Proyecto Mina Subterránea", prerrequisitos: "Diseño y Planificación Mina Subterránea" },
    { nombre: "Taller de Proyecto Mina Cielo Abierto", prerrequisitos: "Diseño y Planificación Mina Cielo Abierto" },
    { nombre: "Electivo II", prerrequisitos: "Inglés III, Voladura de Rocas, Geomensura de Minas, Geología Económica y de Minas, Resistencia de Materiales, Ingeniería Económica y Evaluación de Proyectos" }
  ],
  // Semestre 11
  [
    { nombre: "Trabajo de Titulación", prerrequisitos: "Tópico de Especialidad II, Legislación Laboral y Minera, Taller de Evaluación de Proyectos Metalúrgicos, Taller de Proyecto Mina Subterránea, Taller de Proyecto Mina Cielo Abierto, Electivo II" }
  ]

];

// Elementos DOM
const malla = document.getElementById("malla");
const filtro = document.getElementById("filtro");
const avanceSpan = document.getElementById("avance");
const semestreAtrasadoSpan = document.getElementById("semestre-atrasado");

// Estados guardados
let aprobadas = JSON.parse(localStorage.getItem("aprobadas")) || [];
let enCurso = JSON.parse(localStorage.getItem("enCurso")) || [];
let resaltadas = [];

// Para contar clics rápidos (1,2,3)
const clickDelay = 350;
let clickTimeout = null;

// Timeout para mantener presionado
let holdTimeout = null;

// Construye la malla
function construirMalla() {
  malla.innerHTML = "";

  semestres.forEach((semestre, index) => {
    const columna = document.createElement("div");
    columna.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${index + 1}`;
    columna.appendChild(titulo);

    // Botón para mostrar mensaje emergente de aprobación del semestre
    const btnMensaje = document.createElement("button");
    btnMensaje.textContent = "Ver mensaje de aprobación";
    btnMensaje.style.marginBottom = "10px";
    btnMensaje.style.cursor = "pointer";
    btnMensaje.addEventListener("click", () => {
      alert(mensajesSemestre[index + 1] || "Mensaje no disponible.");
    });
    columna.appendChild(btnMensaje);

    semestre.forEach(asig => {
      const div = document.createElement("div");
      div.className = "asignatura";
      div.textContent = asig.nombre;
      div.setAttribute("data-prerrequisitos", asig.prerrequisitos);
      div.setAttribute("data-semestre", index + 1);

      // Estado bloqueado si prerrequisitos no cumplidos
      if (!puedeCursar(asig.nombre) && !aprobadas.includes(asig.nombre) && !enCurso.includes(asig.nombre)) {
        div.classList.add("bloqueada");
      }

      if (aprobadas.includes(asig.nombre)) div.classList.add("aprobada");
      else if (enCurso.includes(asig.nombre)) div.classList.add("en-curso");

      // Contar clics rápidos
      let clickCount = 0;
      div.addEventListener("click", (e) => {
        e.preventDefault();
        clickCount++;
        if (clickTimeout) clearTimeout(clickTimeout);

        clickTimeout = setTimeout(() => {
          if (clickCount === 1) {
            toggleEnCurso(asig.nombre, div);
          } else if (clickCount === 2) {
            toggleAprobada(asig.nombre, div);
          } else if (clickCount === 3) {
            toggleResaltada(asig.nombre);
          }
          clickCount = 0;
        }, clickDelay);
      });

      // Detectar mantener presionado 2 segundos
      div.addEventListener("mousedown", () => {
        holdTimeout = setTimeout(() => {
          resaltarPrerrequisitos(asig.nombre);
        }, 2000);
      });
      div.addEventListener("mouseup", () => {
        clearTimeout(holdTimeout);
      });
      div.addEventListener("mouseleave", () => {
        clearTimeout(holdTimeout);
      });

      columna.appendChild(div);
    });

    malla.appendChild(columna);
  });

  actualizarVista();
  actualizarInfo();
}

// Comprueba si se pueden cursar los prerrequisitos de una asignatura
function puedeCursar(nombre) {
  const asig = semestres.flat().find(a => a.nombre === nombre);
  if (!asig) return true; // si no encuentra, asume que puede cursar

  if (!asig.prerrequisitos) return true;
  const lista = asig.prerrequisitos.split(",").map(p => p.trim()).filter(p => p.length > 0);
  if (lista.length === 0) return true;

  return lista.every(pr => aprobadas.includes(pr));
}

// Toggle estados
function toggleEnCurso(nombre, div) {
  if (div.classList.contains("aprobada")) return;

  if (div.classList.contains("en-curso")) {
    div.classList.remove("en-curso");
    enCurso = enCurso.filter(n => n !== nombre);
  } else {
    if (!puedeCursar(nombre)) {
      alert("No puedes poner esta asignatura como en curso, falta(s) prerrequisito(s) aprobado(s).");
      return;
    }
    div.classList.add("en-curso");
    enCurso.push(nombre);
  }
  localStorage.setItem("enCurso", JSON.stringify(enCurso));
  actualizarInfo();
  actualizarVista();
}

function toggleAprobada(nombre, div) {
  if (!div.classList.contains("aprobada")) {
    const prerreqs = div.getAttribute("data-prerrequisitos");
    const lista = prerreqs ? prerreqs.split(",").map(p => p.trim()) : [];
    const faltantes = lista.filter(pr => !aprobadas.includes(pr));
    if (faltantes.length > 0) {
      alert(`No puedes aprobar esta asignatura aún. Faltan: ${faltantes.join(", ")}`);
      return;
    }
  }

  if (div.classList.contains("aprobada")) {
    div.classList.remove("aprobada");
    aprobadas = aprobadas.filter(n => n !== nombre);
  } else {
    div.classList.add("aprobada");
    aprobadas.push(nombre);

    if (div.classList.contains("en-curso")) {
      div.classList.remove("en-curso");
      enCurso = enCurso.filter(n => n !== nombre);
      localStorage.setItem("enCurso", JSON.stringify(enCurso));
    }

    // Mostrar mensaje emergente semestre aprobado si completó todas las asignaturas del semestre
    const semestre = parseInt(div.getAttribute("data-semestre"));
    if (checkSemestreCompleto(semestre)) {
      alert(mensajesSemestre[semestre] || "¡Felicidades por completar el semestre!");
    }
  }
  localStorage.setItem("aprobadas", JSON.stringify(aprobadas));
  actualizarInfo();
  actualizarVista();

  chequearCarreraCompleta();
}

function toggleResaltada(nombre) {
  // Si ya está resaltada, quitar resaltado
  if (resaltadas.length === 1 && resaltadas[0] === nombre) {
    quitarResaltados();
    return;
  }
  resaltarPrerrequisitos(nombre);
}

function resaltarPrerrequisitos(nombre) {
  quitarResaltados();

  // Añade resaltado a la asignatura y sus prerrequisitos
  resaltadas = [];

  // Encontrar asignatura
  const asigPrincipal = [...document.querySelectorAll(".asignatura")].find(el => el.textContent === nombre);
  if (!asigPrincipal) return;

  resaltadas.push(nombre);
  asigPrincipal.classList.add("resaltada");

  // Agregar prerrequisitos
  const prerreqsStr = asigPrincipal.getAttribute("data-prerrequisitos");
  if (prerreqsStr) {
    const prerreqs = prerreqsStr.split(",").map(p => p.trim()).filter(p => p.length > 0);
    prerreqs.forEach(pr => {
      const prEl = [...document.querySelectorAll(".asignatura")].find(el => el.textContent === pr);
      if (prEl) {
        prEl.classList.add("resaltada");
        resaltadas.push(pr);
      }
    });
  }
}

// Quitar resaltados
function quitarResaltados() {
  resaltadas.forEach(nombre => {
    const el = [...document.querySelectorAll(".asignatura")].find(e => e.textContent === nombre);
    if (el) el.classList.remove("resaltada");
  });
  resaltadas = [];
}

// Verifica si todas las asignaturas de un semestre están aprobadas
function checkSemestreCompleto(semestre) {
  const asignaturasSemestre = semestres[semestre - 1].map(a => a.nombre);
  return asignaturasSemestre.every(nombre => aprobadas.includes(nombre));
}

// Actualiza vista según filtro y estado de prerrequisitos
function actualizarVista() {
  const filtroValor = filtro.value;

  document.querySelectorAll(".asignatura").forEach(div => {
    div.classList.remove("oculto");
    div.classList.remove("bloqueada"); // Reseteo bloqueada para volver a calcular abajo

    const nombre = div.textContent;
    const estaAprobada = aprobadas.includes(nombre);
    const estaEnCurso = enCurso.includes(nombre);

    // Si no puede cursar y no está aprobada ni en curso, está bloqueada
    if (!puedeCursar(nombre) && !estaAprobada && !estaEnCurso) {
      div.classList.add("bloqueada");
    }

    // Aplicar filtro
    if (filtroValor === "aprobadas" && !estaAprobada) {
      div.classList.add("oculto");
    } else if (filtroValor === "en-curso" && !estaEnCurso) {
      div.classList.add("oculto");
    } else if (filtroValor === "por-cursar" && (estaAprobada || estaEnCurso)) {
      div.classList.add("oculto");
    }
  });
}

// Actualiza avance y semestre atrasado
function actualizarInfo() {
  const totalAsignaturas = semestres.flat().length;
  const aprobadasCount = aprobadas.length;
  const avancePorcentaje = Math.round((aprobadasCount / totalAsignaturas) * 100);
  avanceSpan.textContent = `Avance: ${avancePorcentaje}%`;

  if (enCurso.length === 0) {
    semestreAtrasadoSpan.textContent = "Semestre más atrasado: -";
  } else {
    let minSemestre = Infinity;
    enCurso.forEach(nombre => {
      semestres.forEach((semestre, idx) => {
        if (semestre.some(asig => asig.nombre === nombre)) {
          if (idx + 1 < minSemestre) minSemestre = idx + 1;
        }
      });
    });
    semestreAtrasadoSpan.textContent = `Semestre más atrasado: ${minSemestre}`;
  }
}

// Verifica si toda la carrera está aprobada y muestra mensaje final y botón
function chequearCarreraCompleta() {
  const totalAsignaturas = semestres.flat().length;
  if (aprobadas.length === totalAsignaturas) {
    // Ver si ya existe el mensaje final y botón
    if (!document.getElementById("mensaje-final")) {
      const contenedor = document.querySelector(".controles");

      const mensajeDiv = document.createElement("div");
      mensajeDiv.id = "mensaje-final";
      mensajeDiv.style.marginTop = "10px";
      mensajeDiv.style.padding = "10px";
      mensajeDiv.style.backgroundColor = "#c9e5f6";
      mensajeDiv.style.color = "#2a4d81";
      mensajeDiv.style.border = "2px solid #183d6b";
      mensajeDiv.style.borderRadius = "8px";
      mensajeDiv.style.fontWeight = "bold";
      mensajeDiv.textContent = mensajeFinal;

      const btnMostrar = document.createElement("button");
      btnMostrar.textContent = "Volver a ver mensaje final";
      btnMostrar.style.display = "block";
      btnMostrar.style.marginTop = "8px";
      btnMostrar.style.padding = "8px";
      btnMostrar.style.cursor = "pointer";
      btnMostrar.style.borderRadius = "5px";
      btnMostrar.style.border = "1.5px solid #183d6b";
      btnMostrar.style.backgroundColor = "#fde9f0";
      btnMostrar.style.color = "#a0516e";

      btnMostrar.addEventListener("click", () => {
        alert(mensajeFinal);
      });

      contenedor.appendChild(mensajeDiv);
      contenedor.appendChild(btnMostrar);
    }
  } else {
    // Si no está completo, ocultar mensaje final y botón si existen
    const mensajeDiv = document.getElementById("mensaje-final");
    if (mensajeDiv) mensajeDiv.remove();

    const contenedor = document.querySelector(".controles");
    const btnMostrar = contenedor.querySelector("button:nth-last-child(1)");
    if (btnMostrar && btnMostrar.textContent === "Volver a ver mensaje final") btnMostrar.remove();
  }
}

// Clic en cualquier parte para quitar resaltados de prerrequisitos (mantener visibles hasta clic)
document.body.addEventListener("click", (e) => {
  // Evitar que al hacer click en asignaturas o botones quite el resaltado inmediatamente si quieres
  // pero aquí quitamos resaltados si hay alguno
  if (resaltadas.length > 0) {
    quitarResaltados();
  }
});

// Evento filtro
filtro.addEventListener("change", () => {
  actualizarVista();
});

// Inicialización
construirMalla();
chequearCarreraCompleta();
Detalles importantes para que todo funcione perfecto:

Asegúrate de tener definidos en tu CSS las clases nuevas:

css
Copiar
Editar
.asignatura.bloqueada {
  color: gray;
  opacity: 0.5;
  pointer-events: none; /* para que no se pueda clicar si quieres */
}

.asignatura.resaltada {
  background-color: #fceabb;
  border: 2px solid #f9a825;
  font-weight: bold;
}
