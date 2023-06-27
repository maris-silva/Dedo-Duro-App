/**
 * Models generated from "Model and Storage" and models extracted from services.
 * To generate entity use syntax:
 * Apperyio.EntityAPI("<model_name>[.<model_field>]");
 */
export var models = {
    "UserModel": {
        "type": "object",
        "properties": {
            "email": {
                "type": "string"
            },
            "gender": {
                "type": "string"
            },
            "job": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "photo": {
                "type": "string"
            },
            "firstName": {
                "type": "string"
            },
            "address": {
                "type": "string"
            },
            "dateOfBirth": {
                "type": "string"
            },
            "phone": {
                "type": "string"
            }
        }
    },
    "String": {
        "type": "string"
    },
    "Number": {
        "type": "number"
    },
    "Any": {
        "type": "any"
    },
    "Function": {
        "type": "Function"
    },
    "Promise": {
        "type": "Promise"
    },
    "Boolean": {
        "type": "boolean"
    },
    "Observable": {
        "type": "Observable"
    },
    "Event": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {}
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "events": {
                                "type": "array",
                                "items": [{
                                    "type": "object",
                                    "properties": {
                                        "time": {
                                            "type": "string"
                                        },
                                        "date": {
                                            "type": "string"
                                        },
                                        "names": {
                                            "type": "string"
                                        }
                                    }
                                }]
                            }
                        }
                    }
                }
            }
        }
    },
    "FileReadService": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "fileInput": {
                                "type": "any"
                            },
                            "resultFormat": {
                                "type": "string",
                                "default": "FORM_DATA"
                            },
                            "formDataFileName": {
                                "type": "string"
                            },
                            "filePath": {
                                "type": "string"
                            },
                            "blobType": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "data": {
                                "type": "any"
                            }
                        }
                    }
                }
            }
        }
    }
};
/**
 * Data storage
 */
export const _aioDefStorageValues = {
    variables: {
    },
    storages: {
    }
}