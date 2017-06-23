
class Message {
  constructor ({
    _id,
    message_id,
    building_id,
    sender_id,
    receiver_id,
    tenant_id,
    landlord_id,
    contents,
  }) {
    this._id = _id
    this.message_id = message_id
    this.building_id = building_id
    this.sender_id = sender_id
    this.receiver_id = receiver_id
    this.tenant_id = tenant_id
    this.landlord_id = landlord_id
    this.contents = contents
    this.channel_id = `${tenant_id}_${landlord_id}_${building_id}`
    this.sent_at = new Date().getTime()/1000
  }
}

module.exports = Message
