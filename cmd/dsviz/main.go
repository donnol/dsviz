package main

import (
	"log"
	"path/filepath"

	"github.com/gin-gonic/gin"
)

func main() {
	dir := "JavascriptVisualRelease"
	server := gin.Default()
	server.NoRoute(gin.HandlerFunc(func(c *gin.Context) {
		c.File(filepath.Join(dir, "Algorithms.html"))
	}))
	server.Static("/", dir)
	if err := server.Run(":8899"); err != nil {
		log.Fatal(err)
	}
}
