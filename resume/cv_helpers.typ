// Function to create a circular avatar
#let avatar(image-path, size: 2.6cm) = {
  box(
    width: size,
    height: size,
    clip: true,
    radius: size / 2,
  )[#image(image-path, width: size, height: size, fit: "cover")]
}

// Function for section headers
#let section-header(title, color, indent: 0em) = {
  v(0.4em)
  pad(left: indent)[
    #text(fill: color, weight: "semibold")[#title]
  ]
  v(-0.8em)
  line(length: 100%, stroke: 0.4pt)
  v(0.2em)
}

// Function to create a line break per item
#let line-item(..items) = {
  for item in items.pos() {
    item
    linebreak()
  }
}

// Function to create a flexible grid with items
#let tech-grid(items, cols: 3, text-color: rgb("#000000"), text-size: 11pt) = {
  rect(
    width: 100%,
    fill: rgb("#F3F3F3"),
    stroke: none,
    radius: 8pt,
    inset: (x: 22pt, y: 14pt),
  )[
    #grid(
      columns: (1fr,) * cols,
      row-gutter: 1em,
      column-gutter: 1.6em,
      align: (left,) * cols,

      // Fill the grid with available items
      ..for i in range(cols * calc.ceil(items.len() / cols)) {
        if i < items.len() {
          (text(fill: text-color, size: text-size)[#items.at(i)],)
        } else {
          ([],)
        }
      }
    )
  ]
}

// Resume colors
#let colors = (
  blue: rgb("#4169e1"),
  green: rgb("00A650"),
  orange: rgb("#FF8000"),
  purple: rgb("#92309B"),
  gray: rgb("#808080"),
)
