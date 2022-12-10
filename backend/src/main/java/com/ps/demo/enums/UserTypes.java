package com.ps.demo.enums;

public enum UserTypes {
    CLIENT("Client"), WORKER("Worker");
    private final String type;


    UserTypes(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
