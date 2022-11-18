export const navVariants = {
  initial: { opacity: 0, y: -100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: (custom) => ({
    opacity: 1,
    transition: {
      delay: custom * 1,
      ease: "easeOut",
    },
  }),
};

export const slideAcross = {
  animate: {
    left: ["0%", "0%", "100%"],
    width: ["0%", "100%", "0%"],
    transition: {
      ease: "easeInOut",
      delay: 0.7,
    },
  },
};

export const fadeInUpDown = (choice) => ({
  initial: {
    opacity: 0,
    y: choice === "up" ? 50 : -50,
  },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      delay: custom * 1,
    },
  }),
});

export const plateVariant = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      delay: 0.9,
    },
  },
};

export const rotatePlate = {
  animate: {
    rotate: [10, 0, 10],
    transition: {
      delay: 2.3,
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const leafVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      delay: custom * 1,
    },
  }),
};

export const leafMove = {
  animate: (custom) => ({
    x: [10, 0, 10],
    transition: {
      delay: 0.9,
      duration: custom * 1,
      ease: "easeInOut",
      repeat: Infinity,
    },
  }),
};
