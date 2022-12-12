package com.ps.demo.enums;

public enum WorkTypes {
    ELECTRICITY("Electricity"),
    BUILDING("Building"),
    PAINTING("Painting"),
    REPAIRING("Repairing"),
    MECHANIC("Mechanic");
    private final String type;


    WorkTypes(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}
