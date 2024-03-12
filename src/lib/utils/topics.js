export function get_topic_by_id(topics, topic_id) {
	const topic = topics.find(t => t.id === topic_id);
	if (topic) {
		return topic;
	} else {
		return topics[0];
	}
}

export function bytes_to_megabytes(bytes) {
	return parseFloat((bytes / (1024 * 1024)).toFixed(2));
}

export function truncate_text(text, length) {
	return text.length > length ? `# ${text.slice(0, length)}...` : `# ${text}`;
}
