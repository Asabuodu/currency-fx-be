import * as jspb from 'google-protobuf';

export class Request extends jspb.Message {
  serializeBinary(): Uint8Array {
    const writer = new jspb.BinaryWriter();
    this.serializeBinaryToWriter(writer);
    return writer.getResultBuffer();
  }

  toObject(includeInstance?: boolean): Request.AsObject {
    return { ...this.toObject(), ...{} };
  }

  static toObject(includeInstance: boolean, msg: Request): Request.AsObject {
    return msg.toObject(includeInstance);
  }

  serializeBinaryToWriter(writer: jspb.BinaryWriter): void {
    // Implement serialization logic here
    // For example:
    // writer.writeInt32(1, this.someField);
  }

  deserializeBinary(bytes: Uint8Array): Request {
    const reader = new jspb.BinaryReader(bytes);
    return Request.deserializeBinaryFromReader(reader, new Request());
  }

  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request {
    // Implement deserialization logic here
    // For example:
    // message.setSomeField(reader.readInt32());
    return message;
  }
}

export namespace Request {
  export type AsObject = {};
}

export class Response extends jspb.Message {
  serializeBinary(): Uint8Array {
    const writer = new jspb.BinaryWriter();
    this.serializeBinaryToWriter(writer);
    return writer.getResultBuffer();
  }

  toObject(includeInstance?: boolean): Response.AsObject {
    return { ...this.toObject(), ...{} };
  }

  static toObject(includeInstance: boolean, msg: Response): Response.AsObject {
    return msg.toObject(includeInstance);
  }

  serializeBinaryToWriter(writer: jspb.BinaryWriter): void {
    // Implement serialization logic here
  }

  deserializeBinary(bytes: Uint8Array): Response {
    const reader = new jspb.BinaryReader(bytes);
    return Response.deserializeBinaryFromReader(reader, new Response());
  }

  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response {
    // Implement deserialization logic here
    return message;
  }
}

export namespace Response {
  export type AsObject = {};
}

export class FXService {
  static serviceName: string = 'fx.FXService';
}
