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

const malla = document.getElementById("malla");
const filtro = document.getElementById("filtro");
const avanceSpan = document.getElementById("avance");
const semestreAtrasadoSpan = document.getElementById("semestre-atrasado");

// Estados guardados
let aprobadas = JSON.parse(localStorage.getItem("aprobadas")) || [];
let enCurso = JSON.parse(localStorage.getItem("enCurso")) || [];
let resaltadas = []; // no persistimos resaltadas

// Para contar clics rápidos (1,2,3)
const clickDelay = 350; // ms para diferenciar entre clicks
let clickTimeout = null;

// Construye la malla
function construirMalla() {
  malla.innerHTML = "";

  semestres.forEach((semestre, index) => {
    const columna = document.createElement("div");
    columna.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${index + 1}`;
    columna.appendChild(titulo);

    semestre.forEach(asig => {
      const div = document.createElement("div");
      div.className = "asignatura";
      div.textContent = asig.nombre;
      div.setAttribute("data-prerrequisitos", asig.prerrequisitos);
      div.setAttribute("data-semestre", index + 1);

      // Estado visual inicial
      if (aprobadas.includes(asig.nombre)) div.classList.add("aprobada");
      else if (enCurso.includes(asig.nombre)) div.classList.add("en-curso");

      // Manejo clicks múltiples
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

      columna.appendChild(div);
    });

    malla.appendChild(columna);
  });

  actualizarVista();
  actualizarInfo();
}

// Alternar estado en curso
function toggleEnCurso(nombre, div) {
  // Si está aprobada, no se puede poner en curso
  if (div.classList.contains("aprobada")) return;

  if (div.classList.contains("en-curso")) {
    div.classList.remove("en-curso");
    enCurso = enCurso.filter(n => n !== nombre);
  } else {
    div.classList.add("en-curso");
    enCurso.push(nombre);
  }
  localStorage.setItem("enCurso", JSON.stringify(enCurso));
  actualizarInfo();
  actualizarVista();
}

// Alternar estado aprobada (doble clic)
function toggleAprobada(nombre, div) {
  // Validar prerrequisitos solo si se va a aprobar y no está aprobada ya
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
    // Si estaba en curso, quitarlo
    if (div.classList.contains("en-curso")) {
      div.classList.remove("en-curso");
      enCurso = enCurso.filter(n => n !== nombre);
      localStorage.setItem("enCurso", JSON.stringify(enCurso));
    }
  }
  localStorage.setItem("aprobadas", JSON.stringify(aprobadas));
  actualizarInfo();
  actualizarVista();
}

// Alternar resaltado (3 clics)
function toggleResaltada(nombre) {
  // Quitar resaltado actual
  document.querySelectorAll(".asignatura.resaltada").forEach(el => {
    el.classList.remove("resaltada");
  });

  if (resaltadas.includes(nombre)) {
    resaltadas = [];
  } else {
    resaltadas = [nombre];
  }

  resaltadas.forEach(nombreR => {
    // Resaltar prerrequisitos
    const asig = document.querySelector(`.asignatura[data-prerrequisitos*="${nombreR}"]`);
    if (asig) {
      asig.classList.add("resaltada");
    }
    // Resaltar asignatura principal
    const principal = [...document.querySelectorAll(".asignatura")].find(el => el.textContent === nombreR);
    if (principal) {
      principal.classList.add("resaltada");
    }
  });
}

// Actualiza la vista según el filtro seleccionado
function actualizarVista() {
  const filtroValor = filtro.value;

  document.querySelectorAll(".asignatura").forEach(div => {
    div.classList.remove("oculto");

    const nombre = div.textContent;
    const estaAprobada = aprobadas.includes(nombre);
    const estaEnCurso = enCurso.includes(nombre);

    if (filtroValor === "aprobadas" && !estaAprobada) {
      div.classList.add("oculto");
    } else if (filtroValor === "en-curso" && !estaEnCurso) {
      div.classList.add("oculto");
    } else if (filtroValor === "por-cursar" && (estaAprobada || estaEnCurso)) {
      div.classList.add("oculto");
    }
  });
}

// Actualiza el porcentaje de avance y semestre atrasado
function actualizarInfo() {
  const totalAsignaturas = semestres.flat().length;
  const aprobadasCount = aprobadas.length;
  const avancePorcentaje = Math.round((aprobadasCount / totalAsignaturas) * 100);
  avanceSpan.textContent = `Avance: ${avancePorcentaje}%`;

  // Semestre más atrasado = semestre menor de las asignaturas en curso
  if (enCurso.length === 0) {
    semestreAtrasadoSpan.textContent = "Semestre más atrasado: -";
  } else {
    // Buscar el semestre más bajo entre las asignaturas en curso
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

// Evento filtro
filtro.addEventListener("change", () => {
  actualizarVista();
});

// Inicialización
construirMalla();
