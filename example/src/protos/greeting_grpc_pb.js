// source: proto/greeting_grpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require("google-protobuf");
var goog = jspb;
var global = Function("return this")();

goog.exportSymbol("proto.greeting.Greeting", null, global);
goog.exportSymbol("proto.greeting.GreetingRequest", null, global);
goog.exportSymbol("proto.greeting.GreetingResponse", null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.greeting.Greeting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.greeting.Greeting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.greeting.Greeting.displayName = "proto.greeting.Greeting";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.greeting.GreetingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.greeting.GreetingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.greeting.GreetingRequest.displayName = "proto.greeting.GreetingRequest";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.greeting.GreetingResponse = function(opt_data) {
  console.log("GreetingResponse", opt_data);
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.greeting.GreetingResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.greeting.GreetingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.greeting.GreetingResponse.displayName =
    "proto.greeting.GreetingResponse";
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.greeting.Greeting.prototype.toObject = function(opt_includeInstance) {
    return proto.greeting.Greeting.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.greeting.Greeting} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.greeting.Greeting.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
        service: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
        message: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
        created: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.greeting.Greeting}
 */
proto.greeting.Greeting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.greeting.Greeting();
  return proto.greeting.Greeting.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.greeting.Greeting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.greeting.Greeting}
 */
proto.greeting.Greeting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setId(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setService(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setMessage(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setCreated(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.greeting.Greeting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.greeting.Greeting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.greeting.Greeting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.greeting.Greeting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(1, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(2, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(3, f);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(4, f);
  }
};

/**
 * required string id = 1;
 * @return {string}
 */
proto.greeting.Greeting.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.greeting.Greeting} returns this
 */
proto.greeting.Greeting.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.greeting.Greeting} returns this
 */
proto.greeting.Greeting.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.greeting.Greeting.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string service = 2;
 * @return {string}
 */
proto.greeting.Greeting.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * @param {string} value
 * @return {!proto.greeting.Greeting} returns this
 */
proto.greeting.Greeting.prototype.setService = function(value) {
  return jspb.Message.setField(this, 2, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.greeting.Greeting} returns this
 */
proto.greeting.Greeting.prototype.clearService = function() {
  return jspb.Message.setField(this, 2, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.greeting.Greeting.prototype.hasService = function() {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * required string message = 3;
 * @return {string}
 */
proto.greeting.Greeting.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * @param {string} value
 * @return {!proto.greeting.Greeting} returns this
 */
proto.greeting.Greeting.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.greeting.Greeting} returns this
 */
proto.greeting.Greeting.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.greeting.Greeting.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional string created = 4;
 * @return {string}
 */
proto.greeting.Greeting.prototype.getCreated = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};

/**
 * @param {string} value
 * @return {!proto.greeting.Greeting} returns this
 */
proto.greeting.Greeting.prototype.setCreated = function(value) {
  return jspb.Message.setField(this, 4, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.greeting.Greeting} returns this
 */
proto.greeting.Greeting.prototype.clearCreated = function() {
  return jspb.Message.setField(this, 4, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.greeting.Greeting.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 4) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.greeting.GreetingRequest.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.greeting.GreetingRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.greeting.GreetingRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.greeting.GreetingRequest.toObject = function(includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.greeting.GreetingRequest}
 */
proto.greeting.GreetingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.greeting.GreetingRequest();
  return proto.greeting.GreetingRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.greeting.GreetingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.greeting.GreetingRequest}
 */
proto.greeting.GreetingRequest.deserializeBinaryFromReader = function(
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.greeting.GreetingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.greeting.GreetingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.greeting.GreetingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.greeting.GreetingRequest.serializeBinaryToWriter = function(
  message,
  writer
) {
  var f = undefined;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.greeting.GreetingResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.greeting.GreetingResponse.prototype.toObject = function(
    opt_includeInstance
  ) {
    return proto.greeting.GreetingResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.greeting.GreetingResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.greeting.GreetingResponse.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        greetingList: jspb.Message.toObjectList(
          msg.getGreetingList(),
          proto.greeting.Greeting.toObject,
          includeInstance
        )
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.greeting.GreetingResponse}
 */
proto.greeting.GreetingResponse.deserializeBinary = function(bytes) {
  console.log("GreetingResponse.deserializeBinary", bytes);
  var reader = new jspb.BinaryReader(bytes);
  console.log('a1')
  var msg = new proto.greeting.GreetingResponse();
  console.log('a2')
  return proto.greeting.GreetingResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.greeting.GreetingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.greeting.GreetingResponse}
 */
proto.greeting.GreetingResponse.deserializeBinaryFromReader = function(
  msg,
  reader
) {
  console.log("GreetingResponse.deserializeBinaryFromReader", msg);
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.greeting.Greeting();
        reader.readMessage(
          value,
          proto.greeting.Greeting.deserializeBinaryFromReader
        );
        msg.addGreeting(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.greeting.GreetingResponse.prototype.serializeBinary = function() {
  console.log("GreetingResponse.serializeBinary");
  var writer = new jspb.BinaryWriter();
  proto.greeting.GreetingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.greeting.GreetingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.greeting.GreetingResponse.serializeBinaryToWriter = function(
  message,
  writer
) {
  console.log("GreetingResponse.serializeBinaryToWriter", message);
  var f = undefined;
  f = message.getGreetingList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.greeting.Greeting.serializeBinaryToWriter
    );
  }
};

/**
 * repeated Greeting greeting = 1;
 * @return {!Array<!proto.greeting.Greeting>}
 */
proto.greeting.GreetingResponse.prototype.getGreetingList = function() {
  return /** @type{!Array<!proto.greeting.Greeting>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.greeting.Greeting,
    1
  ));
};

/**
 * @param {!Array<!proto.greeting.Greeting>} value
 * @return {!proto.greeting.GreetingResponse} returns this
 */
proto.greeting.GreetingResponse.prototype.setGreetingList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.greeting.Greeting=} opt_value
 * @param {number=} opt_index
 * @return {!proto.greeting.Greeting}
 */
proto.greeting.GreetingResponse.prototype.addGreeting = function(
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.greeting.Greeting,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.greeting.GreetingResponse} returns this
 */
proto.greeting.GreetingResponse.prototype.clearGreetingList = function() {
  return this.setGreetingList([]);
};

goog.object.extend(exports, proto.greeting);
