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

   function marcarAprobada(nombre, div) {
  const aprobadas = JSON.parse(localStorage.getItem("aprobadas")) || [];

  // Si ya está aprobada, marcarla visualmente
  if (aprobadas.includes(nombre)) {
    div.classList.add("aprobada");
  }

  div.addEventListener("click", () => {
    const prerreqs = div.getAttribute("data-prerrequisitos");
    const lista = prerreqs ? prerreqs.split(",").map(p => p.trim()) : [];

    // Validar prerrequisitos
    const faltantes = lista.filter(pr => !aprobadas.includes(pr));
    if (faltantes.length > 0) {
      alert(`No puedes aprobar esta asignatura aún. Faltan: ${faltantes.join(", ")}`);
      return;
    }

    // Alternar estado
    if (div.classList.contains("aprobada")) {
      div.classList.remove("aprobada");
      const index = aprobadas.indexOf(nombre);
      if (index !== -1) aprobadas.splice(index, 1);
    } else {
      div.classList.add("aprobada");
      aprobadas.push(nombre);
    }

    localStorage.setItem("aprobadas", JSON.stringify(aprobadas));
  });
}

    columna.appendChild(div);
  });

  malla.appendChild(columna);
});
