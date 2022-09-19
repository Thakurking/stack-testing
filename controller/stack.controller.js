const stack = [];
var top = -1;
let stack_size = 0;

function setSize(size) {
  stack_size = size;
}

function push(element) {
  if (top === stack_size - 1) {
    return { message: "Stack Overflow", status: false };
  } else {
    top = top + 1;
    stack[top] = element;
    return stack;
  }
}

function pop() {
  if (top === -1) {
    return { message: "Stack Underflow", status: false };
  } else {
    stack.length = stack.length - 1;
    top = top - 1;
    return stack;
  }
}

function display() {
  if (stack.length === 0) {
    return { message: "Stack empty", status: false };
  }
  return stack;
}

exports.setsize = async (req, res) => {
  try {
    setSize(req.body.size);
    return res.status(200).json({ message: "Stack size fixed", status: true });
  } catch (error) {
    return res.json({ message: error, status: false });
  }
};

exports.push = async (req, res) => {
  try {
    if (stack_size === 0) {
      return res.json({ message: "Stack size is not set", status: false });
    }
    const data = push(req.body.element);
    return res.status(200).json({ message: data, status: true });
  } catch (error) {
    console.log(error);
    return res.json({ message: error, staus: false });
  }
};

exports.delete = async (req, res) => {
  try {
    const data = pop();
    return res.status(200).json({ message: data, status: true });
  } catch (error) {
    return res.json({ message: error, status: false });
  }
};

exports.display = async (req, res) => {
  try {
    const data = display();
    return res.status(200).json({ message: data, status: true });
  } catch (error) {
    return res.json({ message: error, status: false });
  }
};
