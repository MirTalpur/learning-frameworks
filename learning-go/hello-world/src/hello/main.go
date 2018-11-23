package main

import (
	"fmt"
	"os"
)

func main() {
  // also can do this:
  // var args []string
  // args = os.Args
  args := os.Args
	if len(args) > 1 {
		fmt.Println(args[1])
	} else {
		fmt.Println("Hello, I am Gopher")
	}
}
