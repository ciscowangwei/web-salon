//���ʹ��ԭ��JSʵ���Լ���slice����
Array.prototype.slice = function(start, end) {
	var result = new Array();
	start = start || 0;
	end = end || this.length; //thisָ����õĶ��󣬵�����call���ܹ��ı�this��ָ��Ҳ����ָ�򴫽����Ķ������ǹؼ�
	for (var i = start; i < end; i++) {
		result.push(this[i]);
	}
	return result;
}

//JS����û��toArray���������û�У�����Լ�ʵ��һ����
var toArray = function(s) {
	try {
		return Array.prototype.slice.call(s);
	} catch (e) {
		var arr = [];
		for (var i = 0, len = s.length; i < len; i++) { //arr.push(s[i]);
			arr[i] = s[i]; //��˵������push��
		}
	}
}