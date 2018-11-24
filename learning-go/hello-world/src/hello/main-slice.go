package main

import (
	"fmt"
)

func main(){
  var langs [3]string
  langs[0] = "Go"
  langs[1] = "JavaScript"
  langs[2] = "Ruby"
  fmt.Println(langs)
  // slice example below:
  // var lang []string
  // langs = append(langs, "Go")
  // langs = append(langs, "Ruby")
  // langs = append(langs, "Javascript")
  // fmt.Printlin(langs)
  // using slice literals below
  // var langs := []string{"Go", "Ruby", "JavaScriipt"}
  // fmt.Println(langs)
  // slice example without knowing the elements
  // langs := getLangs()
  // for i := range langs {fmt.Println(langs[i])}
  // using slice with value in loop
  // for _, element := range langs {fmt.Println(element)}
  // above if we are assigning something to i and not using it the complier will complain
}
