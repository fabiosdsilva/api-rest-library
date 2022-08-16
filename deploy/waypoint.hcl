project = "api_library"

app "api" {
    
    build {
        use "docker" {}
    }

    deploy {
        use "docker" {}
    }
}
