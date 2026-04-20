// Resume template with template functions
#import "cv_helpers.typ": *

// Main template function
#let resume(
  name: "",
  title: "",
  avatar-path: none,
  links: (),
  body,
) = {

  set document(title: name + " - " + title, author: name)
  set page(paper: "a4", margin: (x: 2cm, y: 1.8cm))
  set text(size: 11pt, font: "IBM Plex Sans")
  set par(leading: 0.65em, spacing: 1.6em)
  show strong: set text(weight: 300)


  // Section colors in order of appearance
  let section_colors = (colors.blue, colors.green, colors.orange, colors.purple)

  // Global counter for sections
  let section_counter = counter("section")

  // Custom style for level 2 headings
  show heading.where(level: 2): it => {
    // Increment the section counter
    section_counter.step()

    // Get the current section index (starts at 1)
    let section_index = section_counter.get().first()

    // Select color based on index (with circular rotation)
    let color = section_colors.at(calc.rem(section_index, section_colors.len()))

    section-header(it.body, color)
  }

  show par: it => {
    pad(left: 2em, it)
  }

  // Resume header
  align(center)[
    #grid(
      columns: (auto, auto),
      column-gutter: 2em,
      align: (right, left + horizon),

      // Avatar if provided
      if avatar-path != none { avatar(avatar-path) } else { [] },

      // Main information
      [
        #set par(leading: 1.4em)
        #text(size: 28pt, weight: "regular")[#name] \
        #text(size: 14pt)[#title] \
        #if links.len() > 0 {
          text(fill: rgb("#808080"))[
            #let link_items = ()
            #for link_data in links {
              link_items.push(link(link_data.url)[#link_data.text])
            }
            #link_items.join(" - ")
          ]
        }
      ],
    )
  ]

  // Display content
  body
}

// Function for custom contact information
#let contact-section(..items) = {
  set par(leading: 1em)
  columns(2)[
    #let all_items = items.pos()
    #let mid_point = calc.ceil(all_items.len() / 2)
    
    #line-item(..all_items.slice(0, mid_point))
    #colbreak()
    #line-item(..all_items.slice(mid_point))
  ]
}
// Function to create the technologies grid
#let technologies(..items) = {
  tech-grid(items.pos(), cols: 3, text-color: rgb("#404040"))
}
