default: help

help:
	@echo "   \033[35mmake\033[0m \033[1m命令使用说明\033[0m"
	@echo "   \033[35mmake install\033[0m\t---  安装依赖"
	@echo "   \033[35mmake clean\033[0m\t---  清除已经安装的依赖及缓存"
	@echo "   \033[35mmake dev\033[0m\t---  开发模式（在 build 的基础上 watch 文件变化并自动 build）"

dev: install
	@gulp dev

install:
	@if which cnpm > /dev/null; then \
	  cnpm install; \
	else \
	  npm install; \
	fi;

clean:
	@echo "正在清除 ... \c"
	@rm -rf node_modules
	@echo "\033[32m完成\033[0m"
