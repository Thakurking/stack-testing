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
    return {message: stack, status: true};
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
  return { message: stack, staus: true };
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
    if(!data.status) {
      return res.json(data);
    }
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.json({ message: error, staus: false });
  }
};

exports.delete = async (req, res) => {
  try {
    const data = pop();
    return res.status(200).json(data);
  } catch (error) {
    return res.json({ message: error, status: false });
  }
};

exports.display = async (req, res) => {
  try {
    const data = display();
    return res.status(200).json(data);
  } catch (error) {
    return res.json({ message: error, status: false });
  }
};


exports.getStackSize = async (req, res) => {
  try {
    return res.json({ stackSize: stack_size, staus: true});
  } catch (error) {
    return res.json({message: error, status: false});
  }
}