interface postIntarface {
    title: string,
    instruction: string
}

export default function postReducer (title:postIntarface, instruction:postIntarface) {
    console.log(title, instruction)
}