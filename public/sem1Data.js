function getData(semPstream) {
  switch (semPstream) {

    //.....................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>SEM 1<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<......................................................... 

    //.......................................>>>>>>>>ARTS<<<<<<<<<<<<<<<<<<<................


  //.......................................>>>>>>>>SCIENCE<<<<<<<<<<<<<<<<<<<................
    case "1mathmaj" :
            return {
        stream: "Math Maj",
        year: "1st",
        sem: "1",
        subjects: {
          subject1: {
            code: "MATHMAJ102",
            name: "Calculus and Geometry ",
            units: {
    unit1: {
        name: "Calculus I",
        data: [
            "Reduction formulae, derivations and illustrations of reduction formulae of the type ∫ sinⁿ𝑥 dx, ∫ cosⁿ𝑥 dx, ∫ secⁿ𝑥 dx, ∫ tanⁿ𝑥 dx, ∫ (log𝑥)ⁿ dx, ∫ sinⁿ𝑥 cosᵐ𝑥 dx etc.",
            "Arc length of a curve including parametric curves, area enclosed by a curve, area between two curves."
        ]
    },
    unit2: {
        name: "Calculus II",
        data: [
            "Successive derivatives, Leibnitz rule and its applications.",
            "Indeterminate forms, L’Hospital’s rule and its applications.",
            "Concept of simple and closed curves and their parameterizations.",
            "Pedal equation, envelopes, evolute, asymptotes, radius of curvature.",
            "Concavity, convexity, cusps and inflection points."
        ]
    },
    unit3: {
        name: "Geometry I",
        data: [
            "2D: Reflection properties of conics, rotation of axes and second-degree equations.",
            "Pair of straight lines, classification of conics using the discriminant.",
            "Polar equations of conics."
        ]
    },
    unit4: {
        name: "Geometry II",
        data: [
            "3D: Spheres, cylindrical surfaces, cones, ellipsoids, paraboloids, hyperboloids.",
            "Plane sections of conicoids, generating lines, classification of quadrics."
        ]
    }
},
          },
          subject2: {
            code: "MATHMAJ101",
            name: "Classical Algebra and Matrix Theory",
            units: {
    unit1: {
        name: "Classical Algebra I",
        data: [
            "Complex numbers: Polar representation, De Moivre’s theorem for rational indices and its applications.",
            "Logarithm, trigonometric, exponential and hyperbolic functions of complex variable."
        ]
    },
    unit2: {
        name: "Classical Algebra II",
        data: [
            "Theory of polynomial equations: Fundamental theorem of Classical Algebra (statement only).",
            "Location and nature of roots: Descartes’ rule of signs and Sturms’ theorem.",
            "Relation between roots and coefficients.",
            "Solution methods for cubic and biquadratic polynomial equations: Cardan’s and Ferrari’s method.",
            "Symmetric functions of roots, transformation of equations, special roots, reciprocal equations."
        ]
    },
    unit3: {
        name: "Classical Algebra III",
        data: [
            "Inequality: AM ≥ GM ≥ HM, weighted means and m-th power theorem (statement only), Cauchy-Schwarz inequality (statements only) and their applications.",
            "Integers: Well-ordering property of positive integers, division algorithm, Euclidean algorithm, congruence relation between integers.",
            "Fundamental Theorem of Arithmetic (statement only), solution of linear congruence, Chinese Remainder Theorem (statement only) and its applications to find a solution of a system of linear congruences.",
            "Fermat’s Little theorem & Wilson theorem (statement only) and their simple problems."
        ]
    },
    unit4: {
        name: "Matrix Theory I",
        data: [
            "Matrices: Elementary operations, elementary matrices, row/column equivalent matrix, echelon matrix, row/column reduced echelon matrix.",
            "Rank of matrix, normal forms, congruence operations, congruence matrices.",
            "Signature and index."
        ]
    },
    unit5: {
        name: "Matrix Theory II",
        data: [
            "Eigenvalues and eigenvectors of a square matrix, characteristic equation of a matrix.",
            "Cayley-Hamilton theorem (statement only) and its simple applications."
        ]
    }
},
          },
        },
      };
    case "1mathmin":
            return {
        stream: "Math Minor / DSC",
        year: "1st",
        sem: "1",
        subjects: {
          subject1: {
            code: "MATHDSC202/MATHMIN202",
            name: "Classical Algebra and Matrix Theory ",
            units: {
    unit1: {
        name: "Classical Algebra I",
        data: [
            "Complex numbers: Polar representation, De Moivre’s theorem for rational indices and its applications.",
            "Logarithm, trigonometric, exponential and hyperbolic functions of complex variable."
        ]
    },
    unit2: {
        name: "Classical Algebra II",
        data: [
            "Theory of polynomial equations: Fundamental theorem of Classical Algebra (statement only).",
            "Location and nature of roots: Descartes’ rule of signs.",
            "Relation between roots and coefficients.",
            "Solution methods for cubic and biquadratic polynomial equations: Cardan’s and Ferrari’s method.",
            "Symmetric functions of roots, transformation of equations."
        ]
    },
    unit3: {
        name: "Classical Algebra III",
        data: [
            "Inequality: AM ≥ GM ≥ HM, weighted means and m-th power theorem (statement only).",
            "Cauchy-Schwarz inequality (statements only) and their applications."
        ]
    },
    unit4: {
        name: "Matrix Theory I",
        data: [
            "Matrices: Elementary operations, elementary matrices, row/column equivalent matrix, echelon matrix, row/column reduced echelon matrix.",
            "Rank of matrix, normal forms, congruence operations, congruence matrices.",
            "Systems of linear equations: Consistency, the matrix equation AX = B of a system of linear equations, solution sets of linear systems, solution of linear systems using row reduced form."
        ]
    },
    unit5: {
        name: "Matrix Theory II",
        data: [
            "Eigenvalues and eigenvectors of a square matrix, characteristic equation of a matrix.",
            "Cayley-Hamilton theorem (statement only) and its simple applications."
        ]
    }
},
          },
        },
      };
    case "1phymaj" :
            return {
        stream: "Physics Maj",
        year: "1st",
        sem: "1",
        subjects: {
          subject1: {
            code: "UPHYMAJ-1",
            name: "Mathematical Physics I",
units: {
    unit1: {
        name: "Vector Algebra",
        data: [
            "Properties of vectors under rotations.",
            "Scalar product and its invariance under rotations.",
            "Vector product, Scalar triple product and their interpretation in terms of area and volume, respectively.",
            "Scalar and Vector fields."
        ]
    },
    unit2: {
        name: "Vector Calculus",
        data: [
            "Directional derivatives and normal derivative.",
            "Gradient of a scalar field and its geometrical interpretation.",
            "Divergence and curl of a vector field.",
            "Del and Laplacian operators.",
            "Vector identities."
        ]
    },
    unit3: {
        name: "Vector Integration",
        data: [
            "Ordinary Integrals of Vectors.",
            "Multiple integrals.",
            "Notion of infinitesimal line, surface and volume elements.",
            "Line, surface and volume integrals of vector fields.",
            "Flux of a vector field.",
            "Gauss's divergence theorem, Green's and Stokes Theorems and their applications."
        ]
    },
    unit4: {
        name: "Orthogonal Curvilinear Coordinates and Expansion in Series",
        data: [
            "Orthogonal Curvilinear Coordinates.",
            "Derivation of Gradient, Divergence, Curl, and Laplacian in Cartesian, Spherical, and Cylindrical Coordinate Systems.",
            "Expansion in Taylor and Binomial Series."
        ]
    },
    unit5: {
        name: "Differential Equations",
        data: [
            "First Order and Second Order Differential equations: First Order Differential Equations and Integrating Factor.",
            "Homogeneous Equations with constant coefficients.",
            "Wronskian and general solution.",
            "Statement of existence and Uniqueness Theorem for initial value problems."
        ]
    }
},
          },
          subject2: {
            code: "UPHYMAJ-1(Practical)",
            name: "Mathematical Physics-I Lab",
units: {
    unit1: {
        name: "Errors and Error Analysis in Scientific Computing",
        data: [
            "Floating point numbers, single and double precision arithmetic, underflow & overflow.",
            "Truncation and round-off errors.",
            "Absolute and relative errors."
        ]
    },
    unit2: {
        name: "Introduction to Programming in Python",
        data: [
            "Introduction to programming: constants, variables and data types, dynamic typing.",
            "Operators and expressions, modules, I/O statements, iterables.",
            "Compound statements, indentation in Python.",
            "The if-elif-else block, for and while loops, nested compound statements.",
            "Lists, tuples, dictionaries and strings.",
            "Basic file handling.",
            "Basic ideas of object-oriented programming."
        ]
    }
},
          },
          subject3: {
            code: "UPHYMAJ-2",
            name: "Mechanics",
units: {
    unit1: {
        name: "Fundamentals of Dynamics",
        data: [
            "Reference frames. Inertial frames – Review of Newton’s laws of motion.",
            "Galilean transformations; Galilean invariance.",
            "Momentum of variable-mass system: motion of rocket.",
            "Dynamics of a system of particles – conservation of linear momentum, Centre of mass.",
            "Conservative and non-conservative forces.",
            "Potential energy. Stable and unstable equilibrium.",
            "Force as gradient of potential energy.",
            "Law of conservation of energy."
        ]
    },
    unit2: {
        name: "Rotational Dynamics",
        data: [
            "Rotation about a fixed axis – Moment of Inertia, Kinetic energy, Angular momentum and Torque.",
            "Conservation of angular momentum.",
            "Calculation of moment of inertia for rectangular, cylindrical and spherical bodies.",
            "Motion involving both translation and rotation."
        ]
    },
    unit3: {
        name: "Elasticity",
        data: [
            "Hooke’s law, Stress-strain diagram.",
            "Elastic moduli – relation between elastic constants.",
            "Poisson’s ratio – expression of Poisson’s ratio in terms of elastic constants.",
            "Work done in stretching and twisting a wire."
        ]
    },
    unit4: {
        name: "Gravitation and Central Force Motion",
        data: [
            "Law of gravitation. Gravitational potential energy, self-energy.",
            "Inertial and gravitational mass.",
            "Potential and field due to spherical shell and solid sphere.",
            "Motion of a particle under the central force field.",
            "Two-body problem, its reduction to one-body problem and its solution.",
            "Effective potential of a particle in gravitational field.",
            "Trajectory of a particle in inverse-square force potential.",
            "Kepler’s laws. Escape velocity, satellite in circular orbit and applications.",
            "Geosynchronous orbits. Weightlessness."
        ]
    },
    unit5: {
        name: "Non-Inertial Systems",
        data: [
            "Non-inertial frames and fictitious forces.",
            "Uniformly rotating frame.",
            "Laws of physics in rotating coordinate systems.",
            "Centrifugal force. Coriolis force and its applications.",
            "Components of Velocity and Acceleration in Cylindrical and Spherical Coordinate Systems."
        ]
    }
},
          },
          subject4: {
            code: "UPHYMAJ-2(Practical)",
            name: "Mechanics-I Lab",
units: {
    unit1: {
        name: "List of Experiments",
        data: [
            "Measurements of volume of a hollow cylinder using Vernier calipers, Screw gauge, and Traveling microscope.",
            "To determine the height of a building using a Sextant.",
            "To study the motion of a spring and calculate (a) Spring Constant (b) Value of g.",
            "To determine the Moment of Inertia of a Flywheel.",
            "To determine g and velocity for a freely falling body using Digital Timing Technique.",
            "To determine the moment of inertia of (a) cylindrical, (b) rectangular bar about an axis passing through its centre of mass.",
            "To determine the value of g by Bar Pendulum.",
            "To determine the value of g by Kater’s Pendulum.",
            "Determination of rigidity modulus of the material of a wire by static method.",
            "Determination of rigidity modulus of the material of a wire by dynamic method.",
            "To determine the modulus of rigidity of a wire by Maxwell’s needle.",
            "To determine the Young's Modulus of a wire by Optical Lever method.",
            "To determine the elastic constants of a wire by Searle’s method."
        ]
    }
},
          },
        },
      };
    case "1phymin":
            return {
        stream: "Physic Minor",
        year: "1st",
        sem: "1",
        subjects: {
          subject1: {
            code: "UPHYMIN-1(Theory)",
            name: "Mechanics",
units: {
    unit1: {
        name: "Vectors",
        data: [
            "Vector algebra.",
            "Scalar and vector products, triple products.",
            "Vector differentiation, gradient, divergence, Curl and their significance."
        ]
    },
    unit2: {
        name: "Ordinary Differential Equations",
        data: [
            "1st order homogeneous differential equations.",
            "2nd order homogeneous differential equations with constant coefficients."
        ]
    },
    unit3: {
        name: "Laws of Motion",
        data: [
            "Frames of reference.",
            "Newton’s Laws of motion.",
            "Dynamics of a system of particles.",
            "Centre of Mass."
        ]
    },
    unit4: {
        name: "Momentum and Energy",
        data: [
            "Conservation of momentum.",
            "Work and energy.",
            "Conservation of energy.",
            "Motion of rockets."
        ]
    },
    unit5: {
        name: "Rotational Motion",
        data: [
            "Angular velocity and angular momentum.",
            "Torque.",
            "Conservation of angular momentum."
        ]
    },
    unit6: {
        name: "Oscillations",
        data: [
            "Simple harmonic motion.",
            "Differential equation of SHM and its solutions.",
            "Kinetic and Potential Energy, Total Energy and their time averages.",
            "Damped oscillations."
        ]
    },
    unit7: {
        name: "Elasticity",
        data: [
            "Hooke’s law – Stress-strain diagram.",
            "Elastic moduli – Relation between elastic constants.",
            "Poisson’s ratio, Expression for Poisson’s ratio in terms of elastic constants.",
            "Work done in stretching and twisting a wire – Twisting couple on a cylinder."
        ]
    }
},
          },
        subject2: {
            code: "UPHYMIN-1(Practical)",
            name: "Mechanics-Lab",
units: {
    unit1: {
        name: "List of Experiments",
        data: [
            "Measurements of volume of a hollow cylinder using Vernier calipers, Screw gauge, and Traveling microscope.",
            "To determine the height of a building using a Sextant.",
            "To study the motion of a spring and calculate (a) Spring Constant (b) Value of g.",
            "To determine the Moment of Inertia of a Flywheel.",
            "To determine g and velocity for a freely falling body using Digital Timing Technique.",
            "To determine the moment of inertia of (a) cylindrical, (b) rectangular bar about an axis passing through its centre of mass.",
            "To determine the value of g by Bar Pendulum.",
            "To determine the value of g by Kater’s Pendulum.",
            "Determination of rigidity modulus of the material of a wire by static method.",
            "Determination of rigidity modulus of the material of a wire by dynamic method.",
            "To determine the modulus of rigidity of a wire by Maxwell’s needle.",
            "To determine the Young's Modulus of a wire by Optical Lever method.",
            "To determine the elastic constants of a wire by Searle’s method."
        ]
    }
},
          },
        },
      };

    default:
      return {};
  }
}