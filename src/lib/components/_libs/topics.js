export function get_topic_by_id(topics, topic_id) {
	const topic = topics.find(t => t.id === topic_id);
	return topic;
}

export function bytes_to_megabytes(bytes) {
	return parseFloat((bytes / (1024 * 1024)).toFixed(2));
}
