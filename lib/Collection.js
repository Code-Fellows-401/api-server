'use strict';

class Collection {
	constructor(model) {
		this.model = model;
	}

	async read(id, options = {}) {
		try {
			let records = null;
			if (id) {
				options['where'] = { id: id };
				records = await this.model.findOne(options);
			} else {
				records = await this.model.findAll(options);
			}
			return records;
		} catch (err) {
			return err;
		}
	}

	async create(json) {
		try {
			let record = await this.model.create(json);
			return record;
		} catch (err) {
			return err;
		}
	}

	async update(id, json) {
		try {
			let record = await this.model.findOne({ where: { id } });
			let updatedRecord = await record.update(json);
			return updatedRecord;
		} catch (err) {
			return err;
		}
	}

	async delete(id) {
		try {
			let deletedRows = await this.model.destroy({ where: { id } });
			let deleted = 'Deleted';
			return deleted;
		} catch (err) {
			return err;
		}
	}
}

module.exports = Collection;
