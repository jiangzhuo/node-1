const readdir = require('@fibjs/fs-readdir-recursive');

module.exports = {
  fibjs_assert: require('assert'),
  fibjs_base32: require('base32'),
  fibjs_base64: require('base64'),
  fibjs_base64vlq: require('base64vlq'),
  fibjs_bson: require('bson'),
  fibjs_collection: require('collection'),
  fibjs_coroutine: require('coroutine'),
  fibjs_crypto: require('crypto'),
  fibjs_db: require('db'),
  fibjs_encoding: require('encoding'),
  fibjs_events: require('events'),
  fibjs_fs: require('fs'),
  fibjs_gd: require('gd'),
  fibjs_hash: require('hash'),
  fibjs_hex: require('hex'),
  fibjs_http: require('http'),
  fibjs_iconv: require('iconv'),
  fibjs_io: require('io'),
  fibjs_json: require('json'),
  fibjs_mq: require('mq'),
  fibjs_net: require('net'),
  fibjs_os: require('os'),
  fibjs_path: require('path'),
  fibjs_process: require('process'),
  fibjs_profiler: require('profiler'),
  fibjs_querystring: require('querystring'),
  fibjs_re: require('re'),
  fibjs_ssl: require('ssl'),
  fibjs_test: require('test'),
  fibjs_url: require('url'),
  fibjs_util: require('util'),
  fibjs_uuid: require('uuid'),
  fibjs_vm: require('vm'),
  fibjs_ws: require('ws'),
  fibjs_xml: require('xml'),
  fibjs_zip: require('zip'),
  fibjs_zlib: require('zlib'),
  fibjs_zmq: require('zmq'),

  external_readdir: readdir,
 };
