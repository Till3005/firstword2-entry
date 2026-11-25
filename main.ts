const answer: string = "Undo.";

function render(line: string): string {
  return line + "\n";
}

process.stdout.write(render(answer));
