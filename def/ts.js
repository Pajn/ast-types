module.exports = function (fork) {
  fork.use(require("./es7"));

  var types = fork.use(require("../lib/types"));
  var def = types.Type.def;
  var or = types.Type.or;
  var defaults = fork.use(require("../lib/shared")).defaults;

  // Ambient
  def("TSAmbientVariableDefinition")
    .bases("VariableDeclaration");

  def("TSInterfaceDeclaration")
    .bases("Declaration")
    .build("name", "typeParameters", "members")
    .field("name", def("Identifier"))
    .field("typeParameters",
      or(def("TypeParameterDeclaration"), null),
      defaults["null"])
    .field("members", [def("TSSignature")])

  def("TSKeyword")
    .bases("Node")

  def("TSType")
    .bases("Node")

  def("TypeElement")
    .bases("Node")

  def("TSSignature")
    .bases("TypeElement")
    .build("typeParameters", "parameters", "typeAnnotation")
    .field("typeParameters",
      or(def("TypeParameterDeclaration"), null),
      defaults["null"])
    .field("parameters", [def("Identifier")])
    .field("typeAnnotation", def("TSType"));

  // Keywords
  def("TSAnyKeyword")
    .bases("TSKeyword")

  def("TSBooleanKeyword")
    .bases("TSKeyword")

  def("TSNeverKeyword")
    .bases("TSKeyword")

  def("TSNumberKeyword")
    .bases("TSKeyword")

  def("TSObjectKeyword")
    .bases("TSKeyword")

  def("TSReadonlyKeyword")
    .bases("TSKeyword")

  def("TSStringKeyword")
    .bases("TSKeyword")

  def("TSSymbolKeyword")
    .bases("TSKeyword")

  def("TSUndefinedKeyword")
    .bases("TSKeyword")

  def("TSVoidKeyword")
    .bases("TSKeyword")


  // Types
  def("TSConstructorType")
    .bases("TSType")

  def("TSFunctionType")
    .bases("TSType")

  def("TSIntersectionType")
    .bases("TSType")
    .build("types")
    .field("types", [def("TSType")])

  def("TSParenthesizedType")
    .bases("TSType")

  def("TSThisType")
    .bases("TSType")

  def("TSUnionType")
    .bases("TSType")
    .build("types")
    .field("types", [def("TSType")])

  def("TSTypeLiteral")
    .bases("TSType")
    .build("members")
    .field("members", [def("TSSignature")])

  def("TSTypeOperator")
    .bases("TSType")

  def("TSTypeReference")
    .bases("TSType")
    .build("typeName", "typeParameters")
    .field("typeName", def("Identifier"))
    .field("typeParameters", def("TSType"))

  def("TSFirstTypeNode")
    .bases("Node")
    .build("id", "typeAnnotation")
    .field("id", def("Identifier"))
    .field("typeAnnotation", def("TSType"));

  // Signatures
  def("TSCallSignature")
    .bases("TSSignature")
    .build("typeParameters", "parameters", "typeAnnotation")

  def("TSConstructSignature")
    .bases("TSSignature")
    .build("typeParameters", "parameters", "typeAnnotation")

  def("TSIndexSignature")
    .bases("TSSignature")
    .build("typeParameters", "parameters", "typeAnnotation")

  def("TSMethodSignature")
    .bases("TSSignature")
    .build("name", "typeParameters", "parameters", "typeAnnotation")
    .field("name", def("Identifier"))

  def("TSPropertySignature")
    .bases("TSSignature")
    .build("name", "typeAnnotation", "initializer")
    .field("name", def("Identifier"))
    .field("typeAnnotation", def("TSType"))
    .field("initializer", or(def("Expression"), null),
      defaults["null"])

  def("TSAsExpression")
    .bases("Expression")
};
